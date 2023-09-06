import { type Endpoint } from './endpoint';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ServiceEndpoint extends Endpoint, Parsable {
}
