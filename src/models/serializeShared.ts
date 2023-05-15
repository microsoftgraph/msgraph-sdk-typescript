import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Shared} from './shared';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShared(writer: SerializationWriter, shared: Shared | undefined = {} as Shared) : void {
        writer.writeStringValue("@odata.type", shared.odataType);
        writer.writeObjectValue<IdentitySet>("owner", shared.owner, serializeIdentitySet);
        writer.writeStringValue("scope", shared.scope);
        writer.writeObjectValue<IdentitySet>("sharedBy", shared.sharedBy, serializeIdentitySet);
        writer.writeDateValue("sharedDateTime", shared.sharedDateTime);
        writer.writeAdditionalData(shared.additionalData);
}
