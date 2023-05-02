import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {CasesRoot} from './casesRoot';
import {createEdiscoveryCaseFromDiscriminatorValue} from './createEdiscoveryCaseFromDiscriminatorValue';
import {EdiscoveryCase} from './ediscoveryCase';
import {serializeEdiscoveryCase} from './serializeEdiscoveryCase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCasesRoot(casesRoot: CasesRoot | undefined = {} as CasesRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(casesRoot),
        "ediscoveryCases": n => { casesRoot.ediscoveryCases = n.getCollectionOfObjectValues<EdiscoveryCase>(createEdiscoveryCaseFromDiscriminatorValue); },
    }
}
