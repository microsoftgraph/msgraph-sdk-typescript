import type {OutlookCategory} from './outlookCategory';
import type {OutlookUser} from './outlookUser';
import {serializeEntity} from './serializeEntity';
import {serializeOutlookCategory} from './serializeOutlookCategory';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookUser(writer: SerializationWriter, outlookUser: OutlookUser | undefined = {} as OutlookUser) : void {
        serializeEntity(writer, outlookUser)
        writer.writeCollectionOfObjectValues<OutlookCategory>("masterCategories", outlookUser.masterCategories, serializeOutlookCategory);
}
