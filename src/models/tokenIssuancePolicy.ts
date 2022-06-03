import {StsPolicy} from './stsPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenIssuancePolicy extends Partial<Parsable>, StsPolicy {
}
