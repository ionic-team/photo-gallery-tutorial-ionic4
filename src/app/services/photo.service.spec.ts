import { TestBed } from '@angular/core/testing';

import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [IonicStorageModule.forRoot()],
    providers: [Camera]
  }));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
