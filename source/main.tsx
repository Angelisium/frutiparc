import { render } from 'preact';
render(<>Hello Frutiparc</>, document.querySelector('main')!);

function AfficheProfil(){
    render(<>
        <div id="profil-card" class="card draggable">
            <div class="card-header d-flex">
                <div id="bouilleprofil" class="d-flex">
                    <img src="public/profil/bouille.png"/>
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
                        <div class="close close-card cursor-pointer">
                            <img src="./public/profil/actionsFiche/icone-x.png" width="16"/>
                        </div>
                    </div>
                    <div class="d-flex w-100 space-between align-items-center">
                        <div class="d-flex">
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/blog.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/chat.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/contact.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/totoche.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/edit.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/editMail.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/gomugomu.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/ignore.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/kick.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/mail.png" />
                            </div>
                            <div class="iconprofil">
                                <img src="./public/profil/actionsFiche/unignore.png" />
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
                <div id="profil-frutiz"	class="panel-profil"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis velit lectus, ultrices eu metus id, molestie tempus mauris. Aenean nec sapien sit amet ante finibus posuere. Curabitur at tortor a nisl vestibulum hendrerit.</div>
                <div id="profil-perso" 	class="panel-profil d-none">Praesent ac orci pulvinar, dictum urna at, tincidunt lectus. Aliquam laoreet, nunc vitae efficitur accumsan, mi sapien luctus nibh, vitae viverra arcu leo a metus. Nam sodales ex nec rutrum dignissim. </div>
                <div id="profil-scores" class="panel-profil d-none">Nunc dui turpis, venenatis ut felis quis, euismod hendrerit elit. Sed libero enim, volutpat sed ultricies ac, fringilla quis elit. Fusce scelerisque augue eu nulla vulputate, eget blandit erat molestie.</div>
                <div id="profil-bonus" 	class="panel-profil d-none">Ut efficitur sagittis metus vitae vulputate. Integer sed dapibus leo. Donec convallis congue turpis, sed tempor massa dapibus id. Aliquam erat volutpat. Nam sagittis volutpat velit sed malesuada. Cras dapibus faucibus congue. </div>
            </div>
        </div>
    </>, document.getElementById('bodycontainer'));
}
function AfficheHeader(){
    return(
    <div id="headerbar" class="w-100 d-flex">
        <div id="resumeprofil" class="d-flex flex-row">
            <div id="bouille" class="cursor-pointer" onClick={AfficheProfil}>
                <img src="public/profil/bouille.png"/>
            </div>
            <div class="d-flex flex-column">
                <div id="niveau" class="d-flex">
                    <div class="levelbars">
                        <div class="w-100 levelbar"></div>
                        <div class="w-100 levelbar"></div>
                        <div class="w-100 levelbar"></div>
                        <div class="w-100 levelbar"></div>
                        <div class="w-100 levelbar full"></div>
                        <div class="w-100 levelbar full"></div>
                        <div class="w-100 levelbar full"></div>
                        <div class="w-100 levelbar full"></div>
                        <div class="level">NIV 82</div>
                    </div>
                    <div class="d-flex flex-column w-100">
                        <div id="score" class="d-flex">
                            <img id="coupe" src="public/profil/niveaux/digiCoupe.png" /><span>713705</span>
                        </div>
                        <div id="action"  class="d-flex flex-row w-100">
                            <div class="iconaction"><img src="public/profil/niveaux/Aide.svg" width="16" height="16" /></div>
                            <div class="iconaction"><img src="public/profil/niveaux/Forum.svg" width="16" height="16" /></div>
                            <div class="iconaction"><img src="public/profil/niveaux/Mail.svg" width="16" height="16" /></div>
                            <div class="iconaction"><img src="public/profil/niveaux/Historique.svg" width="16" height="16" /></div>
                            <div class="iconaction"><img src="public/profil/niveaux/Warning.svg" width="16" height="16" /></div>
                            <div class="iconaction"><img src="public/profil/niveaux/Jeux.svg" width="16" height="16" /></div>
                        </div>
                    </div>
                </div>
                <div id="humeurs" class="d-flex flex-row w-100">
                    <div class="tronche"><img src="public/profil/humeurs/normal.png" /></div>
                    <div class="tronche"><img src="public/profil/humeurs/colere.png" /></div>
                    <div class="tronche"><img src="public/profil/humeurs/triste.png" /></div>
                    <div class="tronche"><img src="public/profil/humeurs/content.png" /></div>
                    <div class="tronche"><img src="public/profil/humeurs/supaContent.png" /></div>
                    <div class="tronche"><img src="public/profil/humeurs/mechant.png" /></div>
                    <div class="tronche"><img src="public/profil/humeurs/timide.png" /></div>
                </div>
            </div>
        </div>
        <div id="spaceWheelcontainer">
            <div id="hollowheel" class="w-100">
                <div id="spaceWheel">
                </div>
                <div class="wheel rotating fruit"></div>
                <div class="wheel rotating horloge hidden"></div>
            </div>
            <div id="triangletop" class="d-flex w-100">
                <div id="buttonleft"></div>
                <div id="buttonright"></div>
            </div>
            <div id="buttonbtm" class="d-flex w-100">
                <div id="pushbtnleft"></div>
                <div id="pushbtnright"></div>
            </div>
        </div>
    </div>
    );
}
function AfficheFusion()
{
    return(
        <div id="frusion">
             <div id="console">
             </div>
        </div>
    );
}
render(<><AfficheHeader/><AfficheFusion/></>, document.getElementById('header')!);
