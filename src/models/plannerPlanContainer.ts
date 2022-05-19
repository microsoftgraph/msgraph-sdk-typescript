import {PlannerContainerType} from './plannerContainerType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlanContainer implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The identifier of the resource that contains the plan. */
    private _containerId?: string | undefined;
    /** The type of the resource that contains the plan. See the previous table for supported types. Possible values are: group, unknownFutureValue, roster. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: roster. */
    private _type?: PlannerContainerType | undefined;
    /** The full canonical URL of the container. */
    private _url?: string | undefined;
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
     * Instantiates a new plannerPlanContainer and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the containerId property value. The identifier of the resource that contains the plan.
     * @returns a string
     */
    public get containerId() {
        return this._containerId;
    };
    /**
     * Sets the containerId property value. The identifier of the resource that contains the plan.
     * @param value Value to set for the containerId property.
     */
    public set containerId(value: string | undefined) {
        this._containerId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "containerId": n => { this.containerId = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PlannerContainerType>(PlannerContainerType); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("containerId", this.containerId);
        writer.writeEnumValue<PlannerContainerType>("type", this.type);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type of the resource that contains the plan. See the previous table for supported types. Possible values are: group, unknownFutureValue, roster. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: roster.
     * @returns a plannerContainerType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of the resource that contains the plan. See the previous table for supported types. Possible values are: group, unknownFutureValue, roster. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: roster.
     * @param value Value to set for the type property.
     */
    public set type(value: PlannerContainerType | undefined) {
        this._type = value;
    };
    /**
     * Gets the url property value. The full canonical URL of the container.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The full canonical URL of the container.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
