import { render } from 'preact';
import {useState} from "react";
render(<>Hello Frutiparc</>, document.querySelector('main')!);

function UserProfil(){
    return(<>
        <div id="profil-card" class="card draggable">
            <div class="card-header d-flex">
                <div id="bouilleprofil" class="d-flex">
                    <img src="profil/bouille.png"/>
                    <div class="levelbars">
                        <div class="w-100 levelbar"></div>
                        <div class="w-100 levelbar"></div>
                        <div class="w-100 levelbar"></div>
                        <div class="w-100 levelbar"></div>
                        <div class="w-100 levelbar full"></div>
                        <div class="w-100 levelbar full"></div>
                        <div class="w-100 levelbar full"></div>
                        <div class="w-100 levelbar full"></div>
                        <div class="level">N. 82</div>
                    </div>
                </div>
                <div class="d-flex w-100 flex-column">
                    <div class="d-flex w-100 ">
                        <div id="topprofil" class="d-flex w-100">
                            <div class="identite d-flex">
                                <div id="statut" class="d-flex">
                                    <div id="bullestatut" class="online"></div>
                                </div>
                                <span id="pseudo">Vastidus</span>
                            </div>
                            <div id="infoprofil">
                                <span class="age">420 mois</span>
                                -
                                <span class="zone">Indéterm.</span>
                            </div>
                        </div>
                        <div class="close close-card cursor-pointer" onClick={CloseCard}>
                            <img src="profil/actionsFiche/icone-x.png" width="16"/>
                        </div>
                    </div>
                    <div class="d-flex w-100 space-between align-items-center">
                        <div class="d-flex">
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/blog.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/chat.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/contact.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/totoche.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/edit.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/editMail.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/gomugomu.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/ignore.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/kick.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/mail.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="profil/actionsFiche/unignore.png" />
                            </div>
                        </div>
                        <div class="d-flex">
                            <div id="carrerouge">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body d-flex flex-column">
                <div id="menu-profil" class="w-100 d-flex flex-row space-between">
                    <div data-target="#profil-frutiz" class="onglet active w-100">frutiz</div>
                    <div data-target="#profil-perso" class="onglet w-100">perso</div>
                    <div data-target="#profil-scores" class="onglet w-100">scores</div>
                    <div data-target="#profil-bonus" class="onglet w-100">bonus</div>
                </div>
                <div id="profil-frutiz"	class="panel-profil">
                    <fieldset class="myfieldset"><legend>frutisigne</legend>
                        <img class="ascendant" src="frutiSigne/Cerises.svg"/><img class="signe" src="frutiSigne/Citron.svg"/><img class="ascendant" src="frutiSigne/Cerises.svg" />
                    </fieldset>
                    <dl class="d-flex flex-row">
                    <dt>frutijob :</dt><dd>Frutiz</dd>
                    <dt>consécration :</dt><dd>73%</dd>
                    <dt>niveau :</dt><dd>82</dd>
                    <dt>fruitAge :</dt><dd>420 mois</dd>
                    <dt>inscription :</dt><dd>06 mar 24</dd>
                    </dl>
                    <dl class="d-flex flex-row">
                        <dt>frutiBlog :</dt><dd>bim-badabim bim-badaboum</dd>
                    </dl>
                </div>
                <div id="profil-perso" 	class="panel-profil d-none">
                    <div class="d-flex">
                        <dl class="d-flex flex-row">
                            <dt>Prénom : </dt><dd>--</dd>
                            <dt>Nom : </dt><dd>--</dd>
                            <dt>Date de naissance : </dt><dd>--</dd>
                            <dt>Activité : </dt><dd>--</dd>
                            <dt>Pays : </dt><dd>--</dd>
                            <dt>Région : </dt><dd>--</dd>
                            <dt>Ville : </dt><dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div id="profil-scores" class="panel-profil d-none">
                    <fieldset class="myfieldset"><legend>Scores du jour</legend></fieldset>
                    <ul id="myScoring">
                        <li><span class="game"><img class="icon" width="16" src="iconJeux/5.svg"/>Swapou 2</span> <span class="score">23"19</span><span class="ranking">1er</span></li>
                        <li><span class="game"><img class="icon" width="16" src="iconJeux/1.svg"/>Frutisnake 2</span> <span class="score">23"19</span><span class="ranking">1er</span></li>
                        <li><span class="game"><img class="icon" width="16" src="iconJeux/2.svg"/>Motion Ball 2</span> <span class="score">23"19</span><span class="ranking">1er</span></li>
                        <li><span class="game"><img class="icon" width="16" src="iconJeux/8.svg"/>Kaluga</span> <span class="score">23"19</span><span class="ranking">1er</span></li>
                        <li class="disabled"><span class="game "><img class="icon" width="16" src="iconJeux/10.svg"/>Burning Kiwi</span> <span class="score">23"19</span><span class="ranking">1er</span></li>
                        <li class="disabled"><span class="game "><img class="icon" width="16" src="iconJeux/12.svg"/>Grapiz</span> <span class="score">23"19</span><span class="ranking">1er</span></li>
                        <li class="disabled"><span class="game "><img class="icon" width="16" src="iconJeux/13.svg"/>Frutibandas</span> <span class="score">23"19</span><span class="ranking">1er</span></li>

                    </ul>
                </div>
                <div id="profil-bonus" 	class="panel-profil d-none">Ut efficitur sagittis metus vitae vulputate. Integer sed dapibus leo. Donec convallis congue turpis, sed tempor massa dapibus id. Aliquam erat volutpat. Nam sagittis volutpat velit sed malesuada. Cras dapibus faucibus congue. </div>
            </div>
        </div>
    </>);
}
function AfficheUserProfil()
{

    render(<><UserProfil/></>, document.getElementById('bodycontainer')!);
}
function CloseCard()
{
    document.getElementsByClassName('card')[0].remove()
    console.log('fermer la card');
}

function HeaderMain(){
    return(
    <div id="headerbar" class="w-100 d-flex">
        <div id="resumeprofil" class="d-flex flex-row">
            <div id="bouille" class="cursor-pointer" onClick={AfficheUserProfil}>
                <Bouille/>
            </div>
            <div class="d-flex flex-column">
                <div id="niveau" class="d-flex">
                    <Level />
                    <div class="d-flex flex-column w-100">
                        <Score/>
                        <IconActions/>
                    </div>
                </div>
                <Humeurs/>
            </div>
        </div>
        <SpaceWheel/>
    </div>
    );
}

function Bouille()
{
    return (<img src="public/profil/bouille.png"/>);
}

function Level()
{
    const niveau = 82;
    return(
        <div class="levelbars">
            <div class="w-100 levelbar"></div>
            <div class="w-100 levelbar"></div>
            <div class="w-100 levelbar"></div>
            <div class="w-100 levelbar"></div>
            <div class="w-100 levelbar full"></div>
            <div class="w-100 levelbar full"></div>
            <div class="w-100 levelbar full"></div>
            <div class="w-100 levelbar full"></div>
            <div class="level">NIV {niveau}</div>
        </div>
    );
}

function Score()
{
    const score = '713705' ;
    return(<div id="score" class="d-flex">
        <img id="coupe" src="profil/niveaux/digiCoupe.png" /><span>{score}</span>
    </div>);
}

function IconActions()
{
    const actions =[ 'Aide', 'Forum', 'Mail', 'Historique', 'Warning', 'Jeux'];
    return (
        <div id="action"  class="d-flex flex-row w-100">
            {actions.map((action) => {
                return (
                    <div class="iconaction"><img src={`profil/niveaux/${action}.svg`} width="16" height="16" /></div>
                );
            })}
        </div>
    );
}

function Humeurs()
{
    const humeurs =[ 'normal', 'colere', 'triste', 'content', 'supaContent', 'mechant', 'timide'];
    return (
        <div id="humeurs" class="d-flex flex-row w-100">
            {humeurs.map((humeur) => {
                return (
                    <div class="tronche"><img src={`profil/humeurs/${humeur}.png`} /></div>
                );
            })}
        </div>
    );
}

function SpaceWheel()
{
    const [disk, ChangeDisk] = useState(0);
    const disks = ['fruit', 'horloge'];
    return (
    <div id="spaceWheelcontainer">
        <div id="hollowheel" class="w-100">
            <div id="spaceWheel">
            </div>
            <SpaceWheelDisk disk={disks[disk%2]}/>
        </div>
        <div id="triangletop" class="d-flex w-100">
            <div id="buttonleft"></div>
            <div id="buttonright"></div>
        </div>
        <div id="buttonbtm" class="d-flex w-100">
            <div id="pushbtnleft" onClick={() => ChangeDisk(disk+1)}></div>
            <div id="pushbtnright"></div>
        </div>
    </div>
    );
}

function SpaceWheelDisk(props)
{
    return(<div id="disk" className={"wheel rotating " + props.disk }></div>);
}

function HeaderFusion()
{
    return(
        <div id="frusion">
             <div id="console">
             </div>
        </div>
    );
}
render(
    <>
        <HeaderMain/>
        <HeaderFusion/>
    </>
    , document.getElementById('header')!
);
// AfficheUserProfil();