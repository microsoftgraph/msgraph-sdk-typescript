import {ColumnDefinition} from './columnDefinition';
import {ContentType} from './contentType';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createListInfoFromDiscriminatorValue} from './createListInfoFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createSystemFacetFromDiscriminatorValue} from './createSystemFacetFromDiscriminatorValue';
import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {Drive} from './drive';
import {List} from './list';
import {ListInfo} from './listInfo';
import {ListItem} from './listItem';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeContentType} from './serializeContentType';
import {serializeDrive} from './serializeDrive';
import {serializeListInfo} from './serializeListInfo';
import {serializeListItem} from './serializeListItem';
import {serializeRichLongRunningOperation} from './serializeRichLongRunningOperation';
import {serializeSharepointIds} from './serializeSharepointIds';
import {serializeSubscription} from './serializeSubscription';
import {serializeSystemFacet} from './serializeSystemFacet';
import {SharepointIds} from './sharepointIds';
import {Subscription} from './subscription';
import {SystemFacet} from './systemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoList(list: List | undefined = {} as List) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(list),
        "columns": n => { list.columns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
        "contentTypes": n => { list.contentTypes = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
        "displayName": n => { list.displayName = n.getStringValue(); },
        "drive": n => { list.drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); },
        "items": n => { list.items = n.getCollectionOfObjectValues<ListItem>(createListItemFromDiscriminatorValue); },
        "list": n => { list.list = n.getObjectValue<ListInfo>(createListInfoFromDiscriminatorValue); },
        "operations": n => { list.operations = n.getCollectionOfObjectValues<RichLongRunningOperation>(createRichLongRunningOperationFromDiscriminatorValue); },
        "sharepointIds": n => { list.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
        "subscriptions": n => { list.subscriptions = n.getCollectionOfObjectValues<Subscription>(createSubscriptionFromDiscriminatorValue); },
        "system": n => { list.system = n.getObjectValue<SystemFacet>(createSystemFacetFromDiscriminatorValue); },
    }
}
