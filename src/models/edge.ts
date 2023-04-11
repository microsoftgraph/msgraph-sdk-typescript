import {createInternetExplorerModeFromDiscriminatorValue} from './createInternetExplorerModeFromDiscriminatorValue';
import {Entity, InternetExplorerMode} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Edge extends Entity implements Parsable {
    /** A container for Internet Explorer mode resources. */
    private _internetExplorerMode?: InternetExplorerMode | undefined;
    /**
     * Instantiates a new edge and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "internetExplorerMode": n => { this.internetExplorerMode = n.getObjectValue<InternetExplorerMode>(createInternetExplorerModeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the internetExplorerMode property value. A container for Internet Explorer mode resources.
     * @returns a internetExplorerMode
     */
    public get internetExplorerMode() {
        return this._internetExplorerMode;
    };
    /**
     * Sets the internetExplorerMode property value. A container for Internet Explorer mode resources.
     * @param value Value to set for the internetExplorerMode property.
     */
    public set internetExplorerMode(value: InternetExplorerMode | undefined) {
        this._internetExplorerMode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<InternetExplorerMode>("internetExplorerMode", this.internetExplorerMode);
    };
}
