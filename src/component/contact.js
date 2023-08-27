import igImage from '../image/ig.PNG';

const contactComponent = () => {
    return (
        <div class="image-line">
            <a href="https://instagram.com/htc.chula?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer"> <img src={igImage} alt='IG' /> </a>
            <a href="https://www.facebook.com/HilltribeclubCU?mibextid=LQQJ4d" target="_blank" rel="noreferrer"> <img src={require('../image/fb.PNG')} alt='FB' /> </a>
            <a href="https://twitter.com/htcchula" target="_blank" rel="noreferrer"> <img src={require('../image/tw.PNG')} alt='TW' /> </a>
            <a href="http://www.tiktok.com/@htc.chula" target="_blank" rel="noreferrer"> <img src={require('../image/tt.PNG')} alt='TT' /> </a>
        </div>
    )
}
export default contactComponent