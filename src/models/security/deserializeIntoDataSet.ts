import { createIdentitySetFromDiscriminatorValue } from '../createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type IdentitySet } from '../identitySet';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type DataSet } from './dataSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSet(dataSet: DataSet | undefined = {} as DataSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataSet),
        "createdBy": n => { dataSet.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { dataSet.createdDateTime = n.getDateValue(); },
        "displayName": n => { dataSet.displayName = n.getStringValue(); },
    }
}
