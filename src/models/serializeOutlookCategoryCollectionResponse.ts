import {OutlookCategory} from './outlookCategory';
import {OutlookCategoryCollectionResponse} from './outlookCategoryCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOutlookCategory} from './serializeOutlookCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookCategoryCollectionResponse(writer: SerializationWriter, outlookCategoryCollectionResponse: OutlookCategoryCollectionResponse | undefined = {} as OutlookCategoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, outlookCategoryCollectionResponse)
        writer.writeCollectionOfObjectValues<OutlookCategory>("value", outlookCategoryCollectionResponse.value, serializeOutlookCategory);
}
