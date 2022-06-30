import {Bitlocker} from './bitlocker';
import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {createBitlockerRecoveryKeyFromDiscriminatorValue} from './createBitlockerRecoveryKeyFromDiscriminatorValue';
import {BitlockerRecoveryKeyImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the informationProtection singleton. */
export class BitlockerImpl extends EntityImpl implements Bitlocker {
    /** The recovery keys associated with the bitlocker entity. */
    private _recoveryKeys?: BitlockerRecoveryKey[] | undefined;
    /**
     * Instantiates a new bitlocker and sets the default values.
     * @param bitlockerParameterValue 
     */
    public constructor(bitlockerParameterValue?: Bitlocker | undefined) {
        super(bitlockerParameterValue);
        this._recoveryKeys = bitlockerParameterValue?.recoveryKeys;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "recoveryKeys": n => { this.recoveryKeys = n.getCollectionOfObjectValues<BitlockerRecoveryKeyImpl>(createBitlockerRecoveryKeyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the recoveryKeys property value. The recovery keys associated with the bitlocker entity.
     * @returns a BitlockerRecoveryKeyInterface
     */
    public get recoveryKeys() {
        return this._recoveryKeys;
    };
    /**
     * Sets the recoveryKeys property value. The recovery keys associated with the bitlocker entity.
     * @param value Value to set for the recoveryKeys property.
     */
    public set recoveryKeys(value: BitlockerRecoveryKey[] | undefined) {
        if(value) {
            const recoveryKeysArrValue: BitlockerRecoveryKeyImpl[] = [];
            this.recoveryKeys?.forEach(element => {
                recoveryKeysArrValue.push((element instanceof BitlockerRecoveryKeyImpl? element:new BitlockerRecoveryKeyImpl(element)));
            });
            this._recoveryKeys = recoveryKeysArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.recoveryKeys && this.recoveryKeys.length != 0){        const recoveryKeysArrValue: BitlockerRecoveryKeyImpl[] = [];
        this.recoveryKeys?.forEach(element => {
            recoveryKeysArrValue.push((element instanceof BitlockerRecoveryKeyImpl? element:new BitlockerRecoveryKeyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BitlockerRecoveryKeyImpl>("recoveryKeys", recoveryKeysArrValue);
        }
    };
}
