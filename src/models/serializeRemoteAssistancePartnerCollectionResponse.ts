import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {RemoteAssistancePartnerCollectionResponse} from './remoteAssistancePartnerCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRemoteAssistancePartner} from './serializeRemoteAssistancePartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoteAssistancePartnerCollectionResponse(writer: SerializationWriter, remoteAssistancePartnerCollectionResponse: RemoteAssistancePartnerCollectionResponse | undefined = {} as RemoteAssistancePartnerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, remoteAssistancePartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<RemoteAssistancePartner>("value", remoteAssistancePartnerCollectionResponse.value, serializeRemoteAssistancePartner);
}
