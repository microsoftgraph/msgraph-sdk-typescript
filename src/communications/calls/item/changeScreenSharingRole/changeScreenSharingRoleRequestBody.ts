import {ScreenSharingRole} from '../../../../models/microsoft/graph/screenSharingRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the changeScreenSharingRole method.  */
export class ChangeScreenSharingRoleRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _role?: ScreenSharingRole | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new changeScreenSharingRoleRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["role", (o, n) => { (o as unknown as ChangeScreenSharingRoleRequestBody).role = n.getEnumValue<ScreenSharingRole>(ScreenSharingRole); }],
        ]);
    };
    /**
     * Gets the role property value. 
     * @returns a screenSharingRole
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. 
     * @param value Value to set for the role property.
     */
    public set role(value: ScreenSharingRole | undefined) {
        this._role = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ScreenSharingRole>("role", this.role);
        writer.writeAdditionalData(this.additionalData);
    };
}
