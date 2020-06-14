let time = new Date().getTime()

const noScroll = (e) => {
    e.preventDefault()
}
//SP用 スクロール禁止関数
document.addEventListener('touchmove', noScroll, { passive: false });

//PC用 スクロール禁止関数
document.addEventListener('mousewheel', noScroll, { passive: false });

window.addEventListener('DOMContentLoaded', () => {
    let now = new Date().getTime()

    if ((now - time) <= 3000) {
        setTimeout(loaded, 5000 - (now - time))
    } else {
        loaded()
    }
    setTimeout(loaded, 10000)
})

const loaded = () => {
    const loading = document.getElementById('loading')
    const box = document.querySelector('.box__1')

    loading.classList.add('loaded')
    document.removeEventListener('touchmove', noScroll, { passive: false });
    document.removeEventListener('mousewheel', noScroll, { passive: false })
    setTimeout(() => {
        box.classList.add('ka')
    }, 1000)
}



//Loadingが5秒以内で完了する場合はLoadingを5秒間表示する→コンテンツ表示
//Loadingが5秒以上かかる場合はLoading終了後→コンテンツ表示
//10秒超えた場合->アニメーションを強制終了

//読み込みが終わった時に経過時間が3秒あるか確認して、あれば表示、なければ5秒との差分待ってから表示する
//表示する際はloadedクラスを追加してアニメーションをフェードアウト


//最初に現在時刻を取得(time)
//window.addEventListener("DOMContentLoaded"){

//その地点での時刻を取得(now)
//(now-time)<=3000の時
//setTimeout(loadedクラス追加, ５秒との差分)
//(now-time)>=3000の時
//そのまま loadedクラスを追加
//Loadingで10秒経過
//setTimeout(loadedクラス追加, 10000s)

//  }
export default main;