import { type StsPolicy } from './stsPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TokenLifetimePolicy extends Parsable, StsPolicy {
}
