const createComment = (text) => {
  (async () => {
    $('.loader').css('display', 'flex');
    $('.loader').fadeIn('fast');
    const createdComment = await fetch('http://localhost:6969/api/comments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const content = await createdComment.json();
    if (content.status !== 201) {
      window.alert(content.message);
    } else {
      loadComment(content.data.text, content.data.id);
      $('.loader').fadeOut('fast');
      console.log(content);
    }
  })();
};

const playAudio = async (id) => {
  const context = new AudioContext();
  const audio = await fetch(`http://localhost:6969/api/t2s/${id}`, {
    method: 'GET',
  });
  const arrayBuffer = await audio.arrayBuffer();
  const audioBuffer = await context.decodeAudioData(arrayBuffer);
  const source = context.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(context.destination);
  source.start();
};

const loadComment = (text, id) => {
  const comments = $('#comment-list');

  // appending elements to screen
  comments.append(`
              <div class="comment">
                <div class="text">
                  ${text}
                </div>
                <button class="play-button" data-id="${id}">
                  <span>Ouvir</span>
                </button>
              </div >
              `);

  // hooking the element to event handler
  const playButton = $('.play-button').filter(`button[data-id=${id}]`);
  console.log(playButton);
  playButton.click(() => {
    playAudio(id);
  });
};

const getAllComments = async () => {
  try {
    const allComments = await fetch('http://localhost:6969/api/comments', {
      method: 'GET',
    });

    const allCommentsParsed = await allComments.json();
    allCommentsParsed.data.forEach((comment) => {
      console.log({ id: comment.id, audioFile: comment.audioFile, text: comment.text });
      loadComment(comment.text, comment.id);
    });
  } catch (error) {
    window.alert('Erro ao carregar comentários, tente novamente');
    window.alert(error);
  }
};

window.onload = () => {
  getAllComments();
  $('#send-comment-button').click(() => {
    const comment = $('#comment-text-area').val();
    createComment(comment);
  });
};
