import {Bitlocker} from './bitlocker';
import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {createBitlockerRecoveryKeyFromDiscriminatorValue} from './createBitlockerRecoveryKeyFromDiscriminatorValue';
import {BitlockerRecoveryKeyImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the informationProtection singleton. */
export class BitlockerImpl extends EntityImpl implements Bitlocker, Parsable {
    /** The recovery keys associated with the bitlocker entity. */
    public recoveryKeys?: BitlockerRecoveryKey[] | undefined;
    /**
     * Instantiates a new bitlocker and sets the default values.
     * @param bitlockerParameterValue 
     */
    public constructor(bitlockerParameterValue?: Bitlocker | undefined) {
        super();
        this.recoveryKeys = bitlockerParameterValue?.recoveryKeys ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.recoveryKeys && this.recoveryKeys.length != 0){        const recoveryKeysArrValue: BitlockerRecoveryKeyImpl[] = []; this.recoveryKeys?.forEach(element => {recoveryKeysArrValue.push(new BitlockerRecoveryKeyImpl(element));});
        writer.writeCollectionOfObjectValues<BitlockerRecoveryKeyImpl>("recoveryKeys", recoveryKeysArrValue);
        }
    };
}
