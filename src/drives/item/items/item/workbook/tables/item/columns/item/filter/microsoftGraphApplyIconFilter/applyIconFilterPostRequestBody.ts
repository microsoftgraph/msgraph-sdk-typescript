import {WorkbookIcon} from '../../../../../../../../../../../models/';
import {createWorkbookIconFromDiscriminatorValue} from '../../../../../../../../../../../models/createWorkbookIconFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplyIconFilterPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The icon property */
    private _icon?: WorkbookIcon | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new applyIconFilterPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "icon": n => { this.icon = n.getObjectValue<WorkbookIcon>(createWorkbookIconFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the icon property value. The icon property
     * @returns a workbookIcon
     */
    public get icon() {
        return this._icon;
    };
    /**
     * Sets the icon property value. The icon property
     * @param value Value to set for the icon property.
     */
    public set icon(value: WorkbookIcon | undefined) {
        this._icon = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<WorkbookIcon>("icon", this.icon);
        writer.writeAdditionalData(this.additionalData);
    };
}
