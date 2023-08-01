import type {Permission} from '../../../../../models/permission';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializePermission} from '../../../../../models/serializePermission';
import type {GrantResponse} from './grantResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGrantResponse(writer: SerializationWriter, grantResponse: GrantResponse | undefined = {} as GrantResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, grantResponse)
        writer.writeCollectionOfObjectValues<Permission>("value", grantResponse.value, serializePermission);
}
