import {PrintUsage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the reportRoot singleton. */
export class PrintUsageByPrinter extends PrintUsage implements Parsable {
    /** The printerId property */
    private _printerId?: string | undefined;
    /**
     * Instantiates a new printUsageByPrinter and sets the default values.
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
            "printerId": n => { this.printerId = n.getStringValue(); },
        };
    };
    /**
     * Gets the printerId property value. The printerId property
     * @returns a string
     */
    public get printerId() {
        return this._printerId;
    };
    /**
     * Sets the printerId property value. The printerId property
     * @param value Value to set for the printerId property.
     */
    public set printerId(value: string | undefined) {
        this._printerId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("printerId", this.printerId);
    };
}
