import {OfficeGraphInsights} from './officeGraphInsights';
import {serializeEntity} from './serializeEntity';
import {serializeSharedInsight} from './serializeSharedInsight';
import {serializeTrending} from './serializeTrending';
import {serializeUsedInsight} from './serializeUsedInsight';
import {SharedInsight} from './sharedInsight';
import {Trending} from './trending';
import {UsedInsight} from './usedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOfficeGraphInsights(writer: SerializationWriter, officeGraphInsights: OfficeGraphInsights | undefined = {} as OfficeGraphInsights) : void {
        serializeEntity(writer, officeGraphInsights)
        writer.writeCollectionOfObjectValues<SharedInsight>("shared", officeGraphInsights.shared, serializeSharedInsight);
        writer.writeCollectionOfObjectValues<Trending>("trending", officeGraphInsights.trending, serializeTrending);
        writer.writeCollectionOfObjectValues<UsedInsight>("used", officeGraphInsights.used, serializeUsedInsight);
}
