import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPlatformsImpl implements ConditionalAccessPlatforms {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue, linux. */
    private _excludePlatforms?: string[] | undefined;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue,linux``. */
    private _includePlatforms?: string[] | undefined;
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
     * Instantiates a new conditionalAccessPlatforms and sets the default values.
     * @param conditionalAccessPlatformsParameterValue 
     */
    public constructor(conditionalAccessPlatformsParameterValue?: ConditionalAccessPlatforms | undefined) {
        this._additionalData = conditionalAccessPlatformsParameterValue?.additionalData ? conditionalAccessPlatformsParameterValue?.additionalData! : {};
        this._excludePlatforms = conditionalAccessPlatformsParameterValue?.excludePlatforms;
        this._includePlatforms = conditionalAccessPlatformsParameterValue?.includePlatforms;
    };
    /**
     * Gets the excludePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue, linux.
     * @returns a string
     */
    public get excludePlatforms() {
        return this._excludePlatforms;
    };
    /**
     * Sets the excludePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue, linux.
     * @param value Value to set for the excludePlatforms property.
     */
    public set excludePlatforms(value: string[] | undefined) {
        if(value) {
            this._excludePlatforms = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludePlatforms": n => { this.excludePlatforms = n.getCollectionOfPrimitiveValues<string>(); },
            "includePlatforms": n => { this.includePlatforms = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the includePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue,linux``.
     * @returns a string
     */
    public get includePlatforms() {
        return this._includePlatforms;
    };
    /**
     * Sets the includePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue,linux``.
     * @param value Value to set for the includePlatforms property.
     */
    public set includePlatforms(value: string[] | undefined) {
        if(value) {
            this._includePlatforms = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludePlatforms){
            writer.writeCollectionOfPrimitiveValues<string>("excludePlatforms", this.excludePlatforms);
        }
        if(this.includePlatforms){
            writer.writeCollectionOfPrimitiveValues<string>("includePlatforms", this.includePlatforms);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
