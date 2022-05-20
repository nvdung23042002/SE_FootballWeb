const Videos = () => {
    const html = `<iframe src="https://www.scorebat.com/embed/" frameborder="0" width="600" height="760" allowfullscreen allow='autoplay; fullscreen' style="width:100%;height:80vh;overflow:hidden;display:block;background-color" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>`;
    return (

        <div dangerouslySetInnerHTML={{ __html: html }} style={{ width: 'auto', height: 'auto' }}></div>


    )
}

export default Videos;