import { createRemoteAssistancePartnerFromDiscriminatorValue } from './createRemoteAssistancePartnerFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type RemoteAssistancePartner } from './remoteAssistancePartner';
import { type RemoteAssistancePartnerCollectionResponse } from './remoteAssistancePartnerCollectionResponse';
import { serializeRemoteAssistancePartner } from './serializeRemoteAssistancePartner';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteAssistancePartnerCollectionResponse(remoteAssistancePartnerCollectionResponse: RemoteAssistancePartnerCollectionResponse | undefined = {} as RemoteAssistancePartnerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(remoteAssistancePartnerCollectionResponse),
        "value": n => { remoteAssistancePartnerCollectionResponse.value = n.getCollectionOfObjectValues<RemoteAssistancePartner>(createRemoteAssistancePartnerFromDiscriminatorValue); },
    }
}
