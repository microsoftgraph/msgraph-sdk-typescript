import {ColumnDefinition} from './columnDefinition';
import {ContentType} from './contentType';
import {Drive} from './drive';
import {List} from './list';
import {ListInfo} from './listInfo';
import {ListItem} from './listItem';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {serializeBaseItem} from './serializeBaseItem';
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

export function serializeList(writer: SerializationWriter, list: List | undefined = {} as List) : void {
        serializeBaseItem(writer, list)
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columns", list.columns, serializeColumnDefinition);
        writer.writeCollectionOfObjectValues<ContentType>("contentTypes", list.contentTypes, serializeContentType);
        writer.writeStringValue("displayName", list.displayName);
        writer.writeObjectValue<Drive>("drive", list.drive, serializeDrive);
        writer.writeCollectionOfObjectValues<ListItem>("items", list.items, serializeListItem);
        writer.writeObjectValue<ListInfo>("list", list.list, serializeListInfo);
        writer.writeCollectionOfObjectValues<RichLongRunningOperation>("operations", list.operations, serializeRichLongRunningOperation);
        writer.writeObjectValue<SharepointIds>("sharepointIds", list.sharepointIds, serializeSharepointIds);
        writer.writeCollectionOfObjectValues<Subscription>("subscriptions", list.subscriptions, serializeSubscription);
        writer.writeObjectValue<SystemFacet>("system", list.system, serializeSystemFacet);
}
