import {Permission} from '../../../../../../../models/permission';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializePermission} from '../../../../../../../models/serializePermission';
import {GrantResponse} from './grantResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGrantResponse(grantResponse: GrantResponse | undefined = {} as GrantResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, grantResponse)
        writer.writeCollectionOfObjectValues<Permission>("value", grantResponse.value, serializePermission);
}
