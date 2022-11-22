import {createMacOSLobChildAppFromDiscriminatorValue} from './createMacOSLobChildAppFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, MacOSLobChildApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSLobChildAppCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: MacOSLobChildApp[] | undefined;
    /**
     * Instantiates a new MacOSLobChildAppCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<MacOSLobChildApp>(createMacOSLobChildAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MacOSLobChildApp>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a macOSLobChildApp
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: MacOSLobChildApp[] | undefined) {
        this._value = value;
    };
}
