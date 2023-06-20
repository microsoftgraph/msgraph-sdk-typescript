import {IdentityApiConnector} from './identityApiConnector';
import {IdentityApiConnectorCollectionResponse} from './identityApiConnectorCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityApiConnectorCollectionResponse(identityApiConnectorCollectionResponse: IdentityApiConnectorCollectionResponse | undefined = {} as IdentityApiConnectorCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityApiConnectorCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityApiConnector>("value", identityApiConnectorCollectionResponse.value, serializeIdentityApiConnector);
}
