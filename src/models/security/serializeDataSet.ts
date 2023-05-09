import {IdentitySet} from '../identitySet';
import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {DataSet} from './dataSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataSet(writer: SerializationWriter, dataSet: DataSet | undefined = {} as DataSet) : void {
        serializeEntity(writer, dataSet)
        writer.writeObjectValue<IdentitySet>("createdBy", dataSet.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", dataSet.createdDateTime);
        writer.writeStringValue("displayName", dataSet.displayName);
}
