import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',   //selector:'[app-server]',  
  templateUrl: './server.component.html',
  //styleUrls: ['./server.component.css']
  styles:[`
  p{
    color:blue;
  }
  `,
  `
  .online{
     color: white;
  }`]
})
export class ServerComponent implements OnInit {

  serverCreationStatus='No server was created';
  allowNewServer = false;
  serverName="TestServer";
  serverName2="";
  serverCreated = false;
  ServerId:number = 10;
  serverStatus = "offline"; 
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
   this.serverStatus  = Math.random() > 0.5 ? 'online' : 'offline';
   setTimeout(() => {
   this.allowNewServer=true;
   }, 2000)
  }

  getServerStatus(){
    return this.serverStatus;
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus='server was created :' + this.serverName;  //combine all forms of data binding
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer2(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='server was created :' + this.serverName2;  
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  showSecret = false;
  log = [];
  onToggleDetails(){
    this.showSecret = !this.serverStatus;
    this.log.push(new Date());
  }
}
