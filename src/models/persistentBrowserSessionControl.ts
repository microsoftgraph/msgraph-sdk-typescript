import {AdminMember1, ConditionalAccessSessionControl} from './index';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersistentBrowserSessionControl extends ConditionalAccessSessionControl implements Parsable {
    /** Possible values are: always, never. */
    private _mode?: PersistentBrowserSessionMode | AdminMember1 | undefined;
    /**
     * Instantiates a new PersistentBrowserSessionControl and sets the default values.
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
            "mode": n => { this.mode = n.getObjectValue<PersistentBrowserSessionMode>(createPersistentBrowserSessionModeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mode property value. Possible values are: always, never.
     * @returns a admin
     */
    public get mode() {
        return this._mode;
    };
    /**
     * Sets the mode property value. Possible values are: always, never.
     * @param value Value to set for the mode property.
     */
    public set mode(value: PersistentBrowserSessionMode | AdminMember1 | undefined) {
        this._mode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PersistentBrowserSessionMode>("mode", this.mode);
    };
}
