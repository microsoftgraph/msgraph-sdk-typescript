import {createRemoteAssistancePartnerFromDiscriminatorValue} from './createRemoteAssistancePartnerFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {RemoteAssistancePartnerCollectionResponse} from './remoteAssistancePartnerCollectionResponse';
import {serializeRemoteAssistancePartner} from './serializeRemoteAssistancePartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteAssistancePartnerCollectionResponse(remoteAssistancePartnerCollectionResponse: RemoteAssistancePartnerCollectionResponse | undefined = {} as RemoteAssistancePartnerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(remoteAssistancePartnerCollectionResponse),
        "value": n => { remoteAssistancePartnerCollectionResponse.value = n.getCollectionOfObjectValues<RemoteAssistancePartner>(createRemoteAssistancePartnerFromDiscriminatorValue); },
    }
}
