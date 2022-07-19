import {DeviceActionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsDefenderScanActionResult extends DeviceActionResult implements Parsable {
    /** Scan type either full scan or quick scan */
    private _scanType?: string | undefined;
    /**
     * Instantiates a new WindowsDefenderScanActionResult and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsDefenderScanActionResult";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "scanType": n => { this.scanType = n.getStringValue(); },
        };
    };
    /**
     * Gets the scanType property value. Scan type either full scan or quick scan
     * @returns a string
     */
    public get scanType() {
        return this._scanType;
    };
    /**
     * Sets the scanType property value. Scan type either full scan or quick scan
     * @param value Value to set for the scanType property.
     */
    public set scanType(value: string | undefined) {
        this._scanType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("scanType", this.scanType);
    };
}
