import {ConditionalAccessSessionControl} from './index';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersistentBrowserSessionControl extends ConditionalAccessSessionControl implements Parsable {
    /** Possible values are: always, never. */
    private _mode?: PersistentBrowserSessionMode | undefined;
    /**
     * Instantiates a new PersistentBrowserSessionControl and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.persistentBrowserSessionControl";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "mode": n => { this.mode = n.getEnumValue<PersistentBrowserSessionMode>(PersistentBrowserSessionMode); },
        };
    };
    /**
     * Gets the mode property value. Possible values are: always, never.
     * @returns a persistentBrowserSessionMode
     */
    public get mode() {
        return this._mode;
    };
    /**
     * Sets the mode property value. Possible values are: always, never.
     * @param value Value to set for the mode property.
     */
    public set mode(value: PersistentBrowserSessionMode | undefined) {
        this._mode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<PersistentBrowserSessionMode>("mode", this.mode);
    };
}
