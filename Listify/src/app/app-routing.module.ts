import { SongrequestComponent } from './shared/songrequest/songrequest.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'room', component: RoomComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'playlist/:id', component: PlaylistComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'currency', component: CurrencyComponent},
  {path: 'currency/:id', component: CurrencyComponent},
  {path: 'currencies', component: CurrenciesComponent},
  {path: 'songrequest', component: SongrequestComponent},
  {path: 'account', component: AccountComponent},
  {path: ':id', component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
