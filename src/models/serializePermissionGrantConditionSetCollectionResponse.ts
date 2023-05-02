import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionGrantConditionSetCollectionResponse} from './permissionGrantConditionSetCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePermissionGrantConditionSet} from './serializePermissionGrantConditionSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionGrantConditionSetCollectionResponse(writer: SerializationWriter, permissionGrantConditionSetCollectionResponse: PermissionGrantConditionSetCollectionResponse | undefined = {} as PermissionGrantConditionSetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, permissionGrantConditionSetCollectionResponse)
        writer.writeCollectionOfObjectValues<PermissionGrantConditionSet>("value", permissionGrantConditionSetCollectionResponse.value, serializePermissionGrantConditionSet);
}
