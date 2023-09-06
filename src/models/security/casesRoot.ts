import { type Entity } from '../entity';
import { type EdiscoveryCase } from './ediscoveryCase';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CasesRoot extends Entity, Parsable {
    /**
     * The ediscoveryCases property
     */
    ediscoveryCases?: EdiscoveryCase[] | undefined;
}
