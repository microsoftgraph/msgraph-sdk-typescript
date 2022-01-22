import {RiskDetection} from './riskDetection';
import {RiskyUser} from './riskyUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityProtection implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Risk detection in Azure AD Identity Protection and the associated information about the detection.  */
    private _riskDetections?: RiskDetection[] | undefined;
    /** Users that are flagged as at-risk by Azure AD Identity Protection.  */
    private _riskyUsers?: RiskyUser[] | undefined;
    /**
     * Instantiates a new identityProtection and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the riskDetections property value. Risk detection in Azure AD Identity Protection and the associated information about the detection.
     * @returns a riskDetection
     */
    public get riskDetections() {
        return this._riskDetections;
    };
    /**
     * Gets the riskyUsers property value. Users that are flagged as at-risk by Azure AD Identity Protection.
     * @returns a riskyUser
     */
    public get riskyUsers() {
        return this._riskyUsers;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["riskDetections", (o, n) => { (o as unknown as IdentityProtection).riskDetections = n.getCollectionOfObjectValues<RiskDetection>(RiskDetection); }],
            ["riskyUsers", (o, n) => { (o as unknown as IdentityProtection).riskyUsers = n.getCollectionOfObjectValues<RiskyUser>(RiskyUser); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<RiskDetection>("riskDetections", this.riskDetections);
        writer.writeCollectionOfObjectValues<RiskyUser>("riskyUsers", this.riskyUsers);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the riskDetections property value. Risk detection in Azure AD Identity Protection and the associated information about the detection.
     * @param value Value to set for the riskDetections property.
     */
    public set riskDetections(value: RiskDetection[] | undefined) {
        this._riskDetections = value;
    };
    /**
     * Sets the riskyUsers property value. Users that are flagged as at-risk by Azure AD Identity Protection.
     * @param value Value to set for the riskyUsers property.
     */
    public set riskyUsers(value: RiskyUser[] | undefined) {
        this._riskyUsers = value;
    };
}
