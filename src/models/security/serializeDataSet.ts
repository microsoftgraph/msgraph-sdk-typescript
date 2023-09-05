import { type IdentitySet } from '../identitySet';
import { serializeEntity } from '../serializeEntity';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type DataSet } from './dataSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDataSet(writer: SerializationWriter, dataSet: DataSet | undefined = {} as DataSet) : void {
        serializeEntity(writer, dataSet)
        writer.writeObjectValue<IdentitySet>("createdBy", dataSet.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", dataSet.createdDateTime);
        writer.writeStringValue("displayName", dataSet.displayName);
}
