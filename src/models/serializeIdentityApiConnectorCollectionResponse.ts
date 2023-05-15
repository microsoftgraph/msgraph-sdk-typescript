import {IdentityApiConnector} from './identityApiConnector';
import {IdentityApiConnectorCollectionResponse} from './identityApiConnectorCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityApiConnectorCollectionResponse(writer: SerializationWriter, identityApiConnectorCollectionResponse: IdentityApiConnectorCollectionResponse | undefined = {} as IdentityApiConnectorCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityApiConnectorCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityApiConnector>("value", identityApiConnectorCollectionResponse.value, serializeIdentityApiConnector);
}
