import {serializeEntity} from '../serializeEntity';
import {ExternalActivity} from './externalActivity';
import {ExternalActivityType} from './externalActivityType';
import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalActivity(writer: SerializationWriter, externalActivity: ExternalActivity | undefined = {} as ExternalActivity) : void {
        serializeEntity(writer, externalActivity)
        writer.writeObjectValue<Identity>("performedBy", externalActivity.performedBy, serializeIdentity);
        writer.writeDateValue("startDateTime", externalActivity.startDateTime);
        writer.writeEnumValue<ExternalActivityType>("type", externalActivity.type);
}
