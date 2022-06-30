import {ScreenSharingRole} from '../../../../models/screenSharingRole';
import {ChangeScreenSharingRolePostRequestBody} from './changeScreenSharingRolePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the changeScreenSharingRole method. */
export class ChangeScreenSharingRolePostRequestBodyImpl implements ChangeScreenSharingRolePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The role property */
    private _role?: ScreenSharingRole | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new changeScreenSharingRolePostRequestBody and sets the default values.
     * @param changeScreenSharingRolePostRequestBodyParameterValue 
     */
    public constructor(changeScreenSharingRolePostRequestBodyParameterValue?: ChangeScreenSharingRolePostRequestBody | undefined) {
        this._additionalData = changeScreenSharingRolePostRequestBodyParameterValue?.additionalData ? changeScreenSharingRolePostRequestBodyParameterValue?.additionalData! : {};
        this._role = changeScreenSharingRolePostRequestBodyParameterValue?.role;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "role": n => { this.role = n.getEnumValue<ScreenSharingRole>(ScreenSharingRole); },
        };
    };
    /**
     * Gets the role property value. The role property
     * @returns a screenSharingRole
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. The role property
     * @param value Value to set for the role property.
     */
    public set role(value: ScreenSharingRole | undefined) {
        if(value) {
            this._role = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.role){
            writer.writeEnumValue<ScreenSharingRole>("role", this.role);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
