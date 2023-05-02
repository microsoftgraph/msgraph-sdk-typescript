import {StsPolicy} from './stsPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenLifetimePolicy extends Parsable, StsPolicy {
}
