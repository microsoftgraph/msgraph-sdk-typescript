import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type CasesRoot } from './casesRoot';
import { createEdiscoveryCaseFromDiscriminatorValue } from './createEdiscoveryCaseFromDiscriminatorValue';
import { type EdiscoveryCase } from './ediscoveryCase';
import { serializeEdiscoveryCase } from './serializeEdiscoveryCase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCasesRoot(casesRoot: CasesRoot | undefined = {} as CasesRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(casesRoot),
        "ediscoveryCases": n => { casesRoot.ediscoveryCases = n.getCollectionOfObjectValues<EdiscoveryCase>(createEdiscoveryCaseFromDiscriminatorValue); },
    }
}
