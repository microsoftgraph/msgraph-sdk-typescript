import {Entity} from '../entity';
import {EdiscoveryCase} from './ediscoveryCase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CasesRoot extends Entity, Parsable {
    /**
     * The ediscoveryCases property
     */
    ediscoveryCases?: EdiscoveryCase[] | undefined;
}
