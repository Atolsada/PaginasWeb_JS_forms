import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponent } from './contacto.component';
import { ListaContactosComponent } from '../lista-contactos/lista-contactos.component';
import { UsuariosService } from '../../services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactoComponent,
        ListaContactosComponent,
      ],
      imports: [HttpClientModule],
      providers: [UsuariosService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    component.contacto = {
      gender: string,
      name: {
          title: string,
          first: string,
          last: string
      },
      location: {
          street: string,
          city: string,
          state: string,
          postcode: string | number,
          coordinates: {
              latitude: string,
              longitude: string
          },
          timezone: {
              offset: string,
              description: string
          }
      },
      email: string,
      login: {
          uuid: string,
          username: string,
          password: string,
          salt: string,
          md5: string,
          sha1: string,
          sha256: string
      },
      dob: {
          date: string,
          age: number
      },
      registered: {
          date: string,
          age: number
      },
      phone: string,
      cell: string,
      id: {
          name: string,
          value: string
      },
      picture: {
          large: string,
          medium: string,
          thumbnail: string
      },
      nat: string
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
