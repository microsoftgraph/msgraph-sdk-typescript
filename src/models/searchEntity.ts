import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SearchEntity extends Entity, Partial<Parsable> {
}
