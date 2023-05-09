import {Edge} from './edge';
import {InternetExplorerMode} from './internetExplorerMode';
import {serializeEntity} from './serializeEntity';
import {serializeInternetExplorerMode} from './serializeInternetExplorerMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdge(writer: SerializationWriter, edge: Edge | undefined = {} as Edge) : void {
        serializeEntity(writer, edge)
        writer.writeObjectValue<InternetExplorerMode>("internetExplorerMode", edge.internetExplorerMode, serializeInternetExplorerMode);
}
