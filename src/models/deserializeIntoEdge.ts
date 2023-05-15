import {createInternetExplorerModeFromDiscriminatorValue} from './createInternetExplorerModeFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Edge} from './edge';
import {InternetExplorerMode} from './internetExplorerMode';
import {serializeInternetExplorerMode} from './serializeInternetExplorerMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdge(edge: Edge | undefined = {} as Edge) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(edge),
        "internetExplorerMode": n => { edge.internetExplorerMode = n.getObjectValue<InternetExplorerMode>(createInternetExplorerModeFromDiscriminatorValue); },
    }
}
