import {AuthenticationMethodModes} from '../../../../../../models/authenticationMethodModes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UpdateAllowedCombinationsPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The allowedCombinations property */
    private _allowedCombinations?: AuthenticationMethodModes[] | undefined;
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
     * Gets the allowedCombinations property value. The allowedCombinations property
     * @returns a authenticationMethodModes
     */
    public get allowedCombinations() {
        return this._allowedCombinations;
    };
    /**
     * Sets the allowedCombinations property value. The allowedCombinations property
     * @param value Value to set for the allowedCombinations property.
     */
    public set allowedCombinations(value: AuthenticationMethodModes[] | undefined) {
        this._allowedCombinations = value;
    };
    /**
     * Instantiates a new updateAllowedCombinationsPostRequestBody and sets the default values.
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
            "allowedCombinations": n => { this.allowedCombinations = n.getEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        this.allowedCombinations && writer.writeEnumValue<AuthenticationMethodModes>("allowedCombinations", ...this.allowedCombinations);
        writer.writeAdditionalData(this.additionalData);
    };
}
