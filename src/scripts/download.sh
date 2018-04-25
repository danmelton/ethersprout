#this file downloads all zip artifacts into artifacts
rm -fR db/* build/*

aws s3 cp s3://$AWS_BUCKET/latest.tar tmp/latest.tar
tar -xf tmp/latest.tar

rm -f tmp/*
